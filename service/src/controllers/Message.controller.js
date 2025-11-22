import userMessages from "../Model/userMessage.model.js";

export const feedback = async (req, res) => {
    try {
        const { Name, email, Message } = req.body;
        const data = new userMessages({
            Name,
            email,
            Message
        });
        await data.save();
        res.status(201).json({
            Message: "Message is successfully send"
        });

    } catch (error) {
        console.log("MEssage Error:", error);
        res.status(400).json("something wrong❗");
    }
}