export async function loadCustomer(customerId) {
    const url = `http://${process.env.IP_ADDR_API}/api/v1/customer/${customerId}`
    const res = await fetch(url)
    const data = await res.json()

    return data
}