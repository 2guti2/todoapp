class HomeController < ApplicationController
  def index
    @todos = Todo.all
    @todo = Todo.new
  end
end
