class ChangeColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :images, :date, :lastModified
  end
end
