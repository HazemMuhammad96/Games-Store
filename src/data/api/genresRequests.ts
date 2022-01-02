import axiosInstance from "./axiosInstance";
export interface IGenresRequests {
    getAll: () => Promise<[]>,
}

async function getAll() {
    try {
        const response = await axiosInstance.get("/genres");
        return response.data;
    }
    catch (e) {
        console.log(e);
    }
}


const GenresRequests: IGenresRequests = {
    getAll,
};

export default GenresRequests;