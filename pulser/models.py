from django.db import models

from datetime import datetime

class Blog(models.Model):
    title=models.CharField(max_length=100)
    image=models.ImageField(upload_to="images/")
    description=models.TextField()
    name=models.CharField(max_length=15)
    created_at=models.DateTimeField(default=datetime.now)
    def __str__(self):
        return self.title