export async function loadCustomerWorkingExperiences(customerId) {
    const url = `http://localhost:8080/api/v1/customer/${customerId}/working-experience/all`
    const res = await fetch(url)
    const data = await res.json()

    return data
}
