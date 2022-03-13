class CreateImages < ActiveRecord::Migration[5.2]
  def change
    create_table :images do |t|
      t.text :url, null: false
      t.string :type, null: false, default: 'unclassified'
      t.string :date, null: false

      t.timestamps
    end

    add_index :images, :type
    add_index :images, :url
  end
end
