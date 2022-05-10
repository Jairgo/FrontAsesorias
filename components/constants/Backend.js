const ip = '10.0.2.2';
const port = 8000;
const main_endpoint = `http://${ip}:${port}/`;

const endpoints = {
    horarioAsesor: (id_asesor) => `${main_endpoint}horario/${id_asesor}/`,
    horarioAlumno: (id_alumno) => `${main_endpoint}horario_alumno/${id_alumno}/`
};

export {
    ip, port, main_endpoint, endpoints
}