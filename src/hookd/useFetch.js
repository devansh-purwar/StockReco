import { useState, useEffect } from "react"

export const useFetch = (url, method = "GET") => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    const [options, setOptions] = useState(null)

    const postData = (post) => {
        setOptions({
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(post)

        })
    }

    useEffect(() => {
        const controller = new AbortController()
        const fetchData = async (fetchOptions) => {
            setIsPending(true)

            try {
                const res = await fetch(url, { ...fetchOptions, signal: controller.signal })
                if (!res.ok) {
                    throw new Error(res.statusText)
                }
                const data = await res.json()
                setIsPending(false)
                setData(data)
                setError(null)
            } catch (err) {
                console.log(err)
                if (err.name === "AbortError") {
                    console.log("aborted")
                } else {
                    setIsPending(false)
                    setError('Could not fetch the data')
                }
            }
        }
        if (method === "GET") {
            fetchData()
        }
        if (method === "POST" && options) {
            fetchData(options)
        }

        return () => {
            controller.abort()
        }

    }, [url, method, options])

    return { data, isPending, error, postData }
}