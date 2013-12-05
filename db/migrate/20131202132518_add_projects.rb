class AddProjects < ActiveRecord::Migration
  def change
  	create_table :projects do |t|
      t.string  :name
      t.string  :language_code
      t.integer :segments_count

  	  t.timestamps
  	end
  end
end
