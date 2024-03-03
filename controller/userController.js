exports.list = async (req, res) => {
    console.log(req.method);
    res.send('/user-list by controller')
}



exports.delete = async (req, res) => {
    console.log(req.method);
    res.send('/user-delete')
}