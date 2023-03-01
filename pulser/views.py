from django.shortcuts import render
from django.http import HttpResponse
from .models import Blog

def about(request):
    return HttpResponse("hi i am about")
def chess(request):
    post=Blog.objects.all()

    return render(request,'check.html',{'post':post})
def mainhome(request):
    return render(request,'indo.html')