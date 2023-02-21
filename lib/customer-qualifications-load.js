export async function loadCustomerQualifications(customerId) {
    const url = `http://139.177.181.17:8080/api/v1/customer/${customerId}/qualification/all`
    const res = await fetch(url)
    const data = await res.json()

    return data
}
