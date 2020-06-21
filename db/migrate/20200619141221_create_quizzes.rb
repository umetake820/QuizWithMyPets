class CreateQuizzes < ActiveRecord::Migration[5.2]
  def change
    create_table :quizzes do |t|
      t.integer :user_id,      null: false
      t.text    :text,         null: false
      t.string  :correct,      null: false
      t.string  :uncorrect1,   null: false
      t.string  :uncorrect2,   null: false
      t.string  :uncorrect3,   null: false
      t.integer :category_id
      t.timestamps
    end
  end
end