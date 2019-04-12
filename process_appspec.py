#!/usr/bin/env python
import yaml
import os
def process_version():
  with open('appspec.yaml', 'r') as f:
      doc=yaml.safe_load(f)
      doc["Resources"][0]["TargetService"]["Properties"]["TaskDefinition"]=os.environ['CODEHUB_UI_TASK_VERSION']
      with open('appspec.yaml', 'w') as yaml_file:
         yaml.dump(doc, yaml_file, default_flow_style=False)

if __name__== "__main__":
  process_version()
