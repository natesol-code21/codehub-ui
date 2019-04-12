import yaml
import os
def process_version():
  print("Hello World!")
  #res=subprocess.check_call("aws ecs list-task-definitions --family-prefix codehub-ui | jq -r '.taskDefinitionArns[-1]'",shell=True)
  #print(res)
  with open('appspec.yaml', 'r') as f:
      doc=yaml.safe_load(f)
      #print(doc)
      #res=call("aws ecs list-task-definitions --family-prefix codehub-ui | jq -r '.taskDefinitionArns[-1]'",shell=True)
      doc["Resources"][0]["TargetService"]["Properties"]["TaskDefinition"]=os.environ['CODEHUB_UI_TASK_VERSION']
      print(yaml.dump(doc))
      with open('appspec.yaml', 'w') as yaml_file:
         yaml.dump(doc, yaml_file, default_flow_style=False)



if __name__== "__main__":
  process_version()
