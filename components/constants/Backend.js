const ip = '10.0.2.2';
const port = 8000;
const main_endpoint = `http://${ip}:${port}/`;

const endpoints = {
    horario: (id) => `${main_endpoint}horario/${id}/`,
    materias: (id) => `${main_endpoint}materiasimpartidas/${id}/`
};

export {
    ip, port, main_endpoint, endpoints
}