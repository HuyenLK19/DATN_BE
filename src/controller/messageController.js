import messageService from '../services/messageService'

let createNewRoom = async (req, res) => {
    try {
        let data = await messageService.createNewRoom(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
}
let sendMessage = async (req, res) => {
    try {
        let data = await messageService.sendMessage(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
}

module.exports = {
    createNewRoom: createNewRoom,
    sendMessage:sendMessage,
}