

export function getImageUrl(person) {
  return person.image;
}

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
      style={{ borderRadius: "50%", objectFit: "cover" }}
    />
  );
}

function Cientifico({ person }) {
  return (
    <div className="cientifico-card">
      <h2>{person.name}</h2>

      {}
      <Avatar person={person} size={100} />

      <ul>
        <li><strong>Profesión:</strong> {person.profession}</li>
        <li><strong>Premios:</strong> {person.awards.join(", ")}</li>
        <li><strong>Descubrió:</strong> {person.discovery}</li>
      </ul>
    </div>
  );
}


export default function Cientificos() {
  const cientificos = [
    {
      name: "Maria Skłodowska-Curie",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Marie_Curie_%281900%29.jpg/250px-Marie_Curie_%281900%29.jpg",
      profession: "física y química",
      awards: [
        "Premio Nobel de Física",
        "Premio Nobel de Química",
        "Medalla Davy",
        "Medalla Matteucci"
      ],
      discovery: "polonio (elemento químico)"
    },
    {
      name: "Katsuko Saruhashi",
      image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Josei-Kyoyo-1965-March-1.jpg",
      profession: "geoquímica",
      awards: ["Premio Miyake de geoquímica", "Premio Tanaka"],
      discovery: "un método para medir el dióxido de carbono en el agua de mar"
    }
  ];

  return (
    <div>
      <h1>Científicos Notables</h1>
      {cientificos.map((person) => (
        <Cientifico key={person.name} person={person} />
      ))}
    </div>
  );
}
