@images.each do |image|
    json.set! image.id do 
        json.extract! image, :url, :lastModified, :foamType
    end
end
