import './Users.css'

export default function Comment ({comment}) {

    const {name, email, body} = comment

    return (
        <div className='box'>
            <h5>Name: {name} </h5>
            <h5>Email: {email} </h5>
            <h5>Comment: {body} </h5>
        </div>
    )
}