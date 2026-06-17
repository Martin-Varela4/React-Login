export const register= async (req, res) => {
    try {

        const user = await authService.register(req.body);
        res.status(201).json({message: "Usuario registrado exitosamente", user});

    } catch(error) {
        res.status(400).json({ error: error.message })


    }


}


export const login= (req, res) => {

}

// await= cuando se registre un usuario