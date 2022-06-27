export default (p) => {
    if(p.test){
        return p.children
    }else{
        return false
    }
}