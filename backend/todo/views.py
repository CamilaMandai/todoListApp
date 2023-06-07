from django.shortcuts import render
from rest_framework import viewsets
from todo.models import Task
from todo.serializer import TaskSerializer

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

