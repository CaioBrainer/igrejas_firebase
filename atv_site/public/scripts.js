import { getFirestore, collection, getDocs, getDoc, doc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const db = getFirestore();

// Pegar o ID da URL
const params = new URLSearchParams(window.location.search);
const id = params.get('id');

async function displayChurchInfo(id) {
  try {
    const churchRef = doc(db, "igrejas", id);
    const churchSnapshot = await getDoc(churchRef);

    if (churchSnapshot.exists()) {
      const churchData = churchSnapshot.data();
      const nomeIgreja = churchData.nome;
      const endereco = churchData.endereço;
      const endereco_img = churchData.imagem_ref;

    if (endereco_img) {
        document.body.style.backgroundImage = `url('${endereco_img}')`;
        // document.body.style.backgroundImage = "url('./imagens/fundo.jpg')";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.height = "100vh";
      }
      

      document.getElementById("title").textContent = nomeIgreja;
      document.getElementById("description").textContent = `Endereço: ${endereco}`;
      
      // Buscar os horários de missas
      const massCollectionRef = collection(db, "igrejas", id, "missas");
      const massSnapshot = await getDocs(massCollectionRef);

      if (!massSnapshot.empty) {
        const daysOfWeek = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
        const masses = [];

        massSnapshot.forEach((doc) => {
          masses.push({ day: doc.id, data: doc.data() });
        });

        masses.sort((a, b) => daysOfWeek.indexOf(a.day.toLowerCase()) - daysOfWeek.indexOf(b.day.toLowerCase()));

        let massHTML = "<h3>Horários das Missas:</h3><ul>";
        masses.forEach((mass) => {
          massHTML += `
            <li>
              <strong>${mass.day}</strong>
              <ul>
                ${mass.data.horarios.map((horario) => `<li>${horario} Horas</li>`).join("")}
              </ul>
            </li>
          `;
        });
        massHTML += "</ul>";
        document.getElementById("mass-schedule").innerHTML = massHTML;
      } else {
        document.getElementById("mass-schedule").innerHTML = "<p>Sem horários de missas disponíveis.</p>";
      }
    } else {
      document.getElementById("title").textContent = "Igreja não encontrada.";
      document.getElementById("description").textContent = "";
    }
  } catch (error) {
    console.error("Erro ao buscar os dados:", error);
    document.getElementById("title").textContent = "Erro ao carregar informações.";
    document.getElementById("description").textContent = "";
  }
}

if (id) {
  displayChurchInfo(id);
} else {
  document.getElementById("title").textContent = "ID inválido";
}