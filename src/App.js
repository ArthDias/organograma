import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {

  const bannerColor = "#98beaf"

  const teams = [
    {
      name: 'Líderança',
      primaryColor: '#FFBA05',
      secundaryColor: '#FFF5D9'

    },
    {
      name: 'Conteúdo',
      primaryColor: '#FF8A29',
      secundaryColor: '#FFEEDF'
    },
    {
      name: 'Apoio Técnico',
      primaryColor: '#E06B69',
      secundaryColor: '#FDE7E8'
    },
    {
      name: 'Logística',
      primaryColor: '#DB6EBF',
      secundaryColor: '#FAE9F5'
    },
    {
      name: 'Comunicação',
      primaryColor: '#82CFFA',
      secundaryColor: '#E8F8FF'
    }
  ]

  const [students, setStudents] = useState([])

  const onNewStudentAdded = (student) => {
    setStudents([...students, student])
  }

  return (
    <div className="App">
      <Banner primaryColor={bannerColor} />
      <Form
        onStudentAdded={student => onNewStudentAdded(student)}
        teamsNames={teams.map(team => team.name)}
      />

      {teams.map(team => 
        <Team
          key={team.name}
          name={team.name}
          primaryColor={team.primaryColor}
          secundaryColor={team.secundaryColor}
          students={students.filter(student => student.team === team.name)}
        />
      )}

        <Footer primaryColor={bannerColor}/>
    </div>
  );
}

export default App;