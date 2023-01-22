fx_version "adamant"
game "gta5"

lua54 'yes'

ui_page "web/build/index.html"

client_script "client.lua"

server_scripts {
    "@oxmysql/lib/MySQL.lua",
    "server.lua"
}

files {
    "web/build/*",
    "web/build/**/*",
}