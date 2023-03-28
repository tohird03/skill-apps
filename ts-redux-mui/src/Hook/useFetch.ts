import React, { useEffect } from "react";
import { instance } from "../Api/instance";

export const useFetchdata = (ENDPOINT: string) => {
    const [data, setData] = React.useState([])
    useEffect(() => {
        instance.get(ENDPOINT)
            .then(res => setData(res.data))
    }, [])

    return {data}
}
