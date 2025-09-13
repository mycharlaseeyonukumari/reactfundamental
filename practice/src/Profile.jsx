function Profile(){
    const name="seeyonu"
    const age=19
    const isStudent=true
    return(
        <div>
            <p>Name: {name}</p>
            <p> Age: {age}</p>

            <p>
                {isStudent===true ? "iam astudent" : "iam not a student"}
            </p>
        </div>
    )
}
export default Profile;