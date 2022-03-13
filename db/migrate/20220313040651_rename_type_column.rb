class RenameTypeColumn < ActiveRecord::Migration[5.2]
  def change
    rename_column :images, :type, :foamType
  end
end
