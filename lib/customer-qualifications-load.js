export async function loadCustomerQualifications(customerId) {
    const url = `http://${process.env.IP_ADDR_API}/api/v1/customer/${customerId}/qualification/all`
    const res = await fetch(url)
    const data = await res.json()

    return data
}
