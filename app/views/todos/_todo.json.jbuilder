json.extract! todo, :id, :title, :done, :index, :created_at, :updated_at
json.url todo_url(todo, format: :json)
