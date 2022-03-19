class Api::ImagesController < ApplicationController
    def index 
        @images = Image.all 
        render :index
    end 

    def show 
        @image = Image.find_by(id: params[:id])
        if @image 
            render :show 
        end
    end 

    def update
        @image = Image.find_by(id: params[:id])
        if @image
            @image.update(image_params)
            render :show 
        end
    end

    private 
    def image_params 
        params.require(:image).permit(:foamType, :lastModified, :url)
    end
end
