from rest_framework import serializers
from  todo.models import Task

class TaskSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Task
        fields = '__all__' #['task'] 