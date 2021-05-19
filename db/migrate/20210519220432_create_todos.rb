class CreateTodos < ActiveRecord::Migration[6.0]
  def change
    create_table :todos do |t|
      t.string :title
      t.boolean :done
      t.integer :index

      t.timestamps
    end
  end
end
