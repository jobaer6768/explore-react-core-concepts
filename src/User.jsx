import './Users.css'

export default function User({user}){

    const {name, email} = user;

    return (
        <div className="box">
            <h5>Name: {name} </h5>
            <h5>Email: {email} </h5>
        </div>
    )
}