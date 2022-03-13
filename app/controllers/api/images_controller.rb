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
        if @post 
            @post.update(post_params)
            render :show 
        end
    end

    private 
    def image_params 
        params.require(:image).permit(:type, :lastModified, :url)
    end
end
