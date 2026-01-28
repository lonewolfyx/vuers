export default eventHandler(async (event) => {
    const url = getRequestURL(event)
    return fetch(`${url.origin}/team-member.json`).then(res => res.json())
})
