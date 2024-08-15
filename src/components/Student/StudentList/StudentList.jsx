import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './StudentList.css'
const StudentList = ({getStudents}) => {
    const [students, setStudents] = useState([])
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/students/new')
      }

    useEffect(() => {
        const fetchStudents = async () => {
          try {
            const data = await getStudents();
            setStudents(data);
          } catch (error) {
            console.error('Failed to fetch Students:', error);
          }
        };
      
        fetchStudents();
      }, [getStudents]);

    
    return(
        <>
            <h1>Student List</h1>
                <ul>
                {students.map(student => (
                    <li className="student-list"key={student._id}>

                        <Link to={`/students/${student._id}`}><p><strong>{student.lastName}, {student.firstName}</strong></p> </Link>
                        <p>Grade: {student.grade}</p>

                    </li>
                ))}
                </ul>
        </>
    )
}

export default StudentList