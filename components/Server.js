import axios from 'axios';
export const fakeUser = async () => {
    const user = {
        name: 'Juan',
        email: 'example@anahuac.mx',
        password: '123456',
        id: '1',
        token: '123456',
        isLoguedIn: true,
        link: await getLink(),
    }
    return user;
}

async function getLink() {
    try {
        const perfilEstudiante = await axios.get('http://becasdeploy.pythonanywhere.com/estudiantes/?id=' + 15);
        return perfilEstudiante.data[0].profile_picture_url;
    } catch (error) {
        console.log(error);
    }
}