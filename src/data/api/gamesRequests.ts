import axiosInstance from "./axiosInstance";
export interface IGamesRequests {
    getAll: (params: {}) => Promise<[]>,
    get: (params: {}) => Promise<any>,
    getFeatured: () => Promise<any>,
}

async function getAll(params): Promise<[]> {
    try {
        const response = await axiosInstance.get("/games", {
            params,
        });
        return response.data;
    }
    catch (e) {
        console.log(e);
        return [];  
    }
}

async function get(params): Promise<any> {
    try {

        const response = await axiosInstance.get(`/games/${params.id}`);

        response.data.description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        return response.data;

        
    }
    catch (e) {
        console.log(e);
        return {};
    }
}

async function getFeatured(): Promise<any> {
    try {

        const response = await axiosInstance.get(`/games/featured`);

        return response.data;


    }
    catch (e) {
        console.log(e);
        return {};
    }
}


const GamesRequests: IGamesRequests = {
    getAll,
    get,
    getFeatured,
};

export default GamesRequests;