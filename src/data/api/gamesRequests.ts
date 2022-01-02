import axiosInstance from "./axiosInstance";
export interface IGamesRequests {
    getAll: (params: {}) => Promise<[]>,
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
    }
}


const GamesRequests: IGamesRequests = {
    getAll,
};

export default GamesRequests;