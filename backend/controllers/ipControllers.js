
let ip = require('../models/IptvModel')

exports.getAllips = async (req, res) => {
    const ips = await ip.find()
    res.status(200).json({
        code: 200,
        success: true,
        message: 'affichage de tous les IptV live',
        count: ips.length,
        ips

    })
}
//----------ajout
exports.addip = async (req, res) => {
    const Ip = new ip(req.body)
    await Ip.save()
    res.status(200).json({
        code: 200,
        success: true,
        message: 'ip a été ajouté',
        Ip
    })
}


exports.getipbyid = async (req, res) => {

    const Ip = await ip.findOne({
        _id: req.params.id
    })
    res.status(200).json({
        success: true,
        message: "affichage d'un seul Ip par id",
        Ip
    })

}

//-----------update--------------------------------
exports.updateip = async (req, res) => {
    const update_ip = await ip.updateOne(
        { _id: req.params.id },
        {
            $set: req.body
        }
    )
    res.status(200).json({
        success: true,
        message: 'ip a été modifié',
        update_ip
    })
}

//--------deleteip

exports.deleteip = async (req, res) => {
    const delete_ip = await ip.deleteOne({
        _id: req.params.id
    })
    res.status(200).json({
        success: true,
        message: 'ip a été supprimé',
        delete_ip
    })
}
