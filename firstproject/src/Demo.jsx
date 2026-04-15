function Demo(){

    let name ="nausheen";
    let students=[{r_no:1,name:"uzair",branch:"science"},
        {r_no:2,name:"ruby",branch:"science"},
{r_no:3,name:"umair",branch:"science"}


    ]


    let msg =()=>{
        return "welcome";
    }
    return<>
    <h1> Hello from functional component</h1>
    {name}<br></br>
     {msg()}<br></br>
     <div className="container">
        <table className="table table-dark table-hover">
            <thead>
                <tr>
                    <th>roll no</th>
                    <th>name</th>
                    <th>branch</th>
                </tr>
            </thead>
            <tbody>
                {students.map(st=>(
                    <tr key={st.r_no}>
                        <td>{st.r_no}</td>
                         <td>{st.name}</td>
                         <td>{st.branch}</td>
                    </tr>
                ))}
            </tbody>
        </table>

     </div>
    </>
}


export default Demo;