import './App.css';

function Student(props){

  return(

    <div className="box">

      <h2>Name: {props.name}</h2>

      <h3>Course: {props.course}</h3>

      <h3>Marks: {props.marks}</h3>

    </div>
  );
}

function App(){

  return(

    <div>

      <h1>Student Details</h1>

      <Student
        name="Rahul"
        course="BCA"
        marks="85"
      />

      <Student
        name="Anjali"
        course="MCA"
        marks="90"
      />

    </div>
  );
}

export default App;