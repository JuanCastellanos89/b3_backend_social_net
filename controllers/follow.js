export const testFollow = (req, res) => {
    return res.status(200).sen({
        message: "Mensaje enviado desde el controlaor de follow"
    });
};