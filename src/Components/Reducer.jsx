import Student from './Student'

const Reducer = (state="",action) =>{
    switch(action){
        case Student: return <Student/>
        default: return <Student/>
    }
}
export default Reducer;