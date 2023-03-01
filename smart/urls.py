
from django.contrib import admin
from django.urls import path
# from .views import home,fun,check
from django.conf.urls.static import static
from django.conf import  settings
from pulser.views import about,chess,mainhome

urlpatterns = [
    path('admin/', admin.site.urls),
    path('about/',about,name='about'),
    path('chess/',chess,name='chess'),
    path('',mainhome,name='mainhome'),

]
urlpatterns  += static(settings.STATIC_URL,document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)