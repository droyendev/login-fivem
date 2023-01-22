local promise = {}

RegisterCommand('login', function()
    SetNuiFocus(true, true)
    SendNUIMessage({ action = 'open' })
end)

RegisterNetEvent('res:backend', function(promiseId, ...)
    if not promise[promiseId] then return end
    promise[promiseId](...)
    promise[promiseId] = nil
end)

RegisterNUICallback('backend', function(data, cb)
    local promiseId = #promise + 1
    promise[promiseId] = cb
    TriggerServerEvent('req:backend', promiseId, data.action, data.args)
end)

RegisterNUICallback('close', function()
    SetNuiFocus(false, false)
end)