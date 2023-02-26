export async function loadCustomerWorkingExperiences(customerId) {
    const url = `http://${process.env.IP_ADDR_API}/api/v1/customer/${customerId}/working-experience/all`
    const res = await fetch(url)
    const data = await res.json()

    return data
}
