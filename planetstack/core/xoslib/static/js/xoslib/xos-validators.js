function xos_get_validators() {
  this.account = {"updated": [], "created": [], "deleted": [], "site": ["notBlank"], "backend_status": ["notBlank"], "id": [], "enacted": ["notBlank"]};
  this.charge = {"updated": [], "slice": [], "created": [], "deleted": [], "amount": ["notBlank"], "object": ["notBlank"], "account": ["notBlank"], "kind": ["notBlank"], "state": ["notBlank"], "coreHours": ["notBlank"], "invoice": [], "date": ["notBlank"], "backend_status": ["notBlank"], "id": [], "enacted": ["notBlank"]};
  this.dashboardView = {"updated": [], "name": ["notBlank"], "created": [], "deleted": [], "url": ["notBlank"], "backend_status": ["notBlank"], "id": [], "enacted": ["notBlank"]};
  this.deployment = {"accessControl": ["notBlank"], "updated": [], "admin_user": [], "name": ["notBlank"], "created": [], "deleted": [], "availability_zone": [], "backend_type": [], "auth_url": [], "admin_password": [], "backend_status": ["notBlank"], "admin_tenant": [], "id": [], "enacted": ["notBlank"]};
  this.deploymentPrivilege = {"updated": [], "created": [], "deleted": [], "role": ["notBlank"], "user": ["notBlank"], "deployment": ["notBlank"], "backend_status": ["notBlank"], "id": [], "enacted": ["notBlank"]};
  this.deploymentRole = {"updated": [], "created": [], "deleted": [], "role": ["notBlank"], "backend_status": ["notBlank"], "id": [], "enacted": ["notBlank"]};
  this.flavor = {"updated": [], "name": ["notBlank"], "created": [], "deleted": [], "description": [], "order": ["notBlank"], "default": [], "flavor": ["notBlank"], "backend_status": ["notBlank"], "id": [], "enacted": ["notBlank"]};
  this.image = {"updated": [], "name": ["notBlank"], "created": [], "deleted": [], "container_format": ["notBlank"], "disk_format": ["notBlank"], "path": [], "backend_status": ["notBlank"], "id": [], "enacted": ["notBlank"]};
  this.imageDeployments = {"updated": [], "created": [], "deleted": [], "image": ["notBlank"], "glance_image_id": [], "deployment": ["notBlank"], "backend_status": ["notBlank"], "id": [], "enacted": ["notBlank"]};
  this.invoice = {"updated": [], "created": [], "deleted": [], "account": ["notBlank"], "date": ["notBlank"], "backend_status": ["notBlank"], "id": [], "enacted": ["notBlank"]};
  this.network = {"controllerParameters": [], "subnet": [], "updated": [], "subnet_id": [], "topologyParameters": [], "name": ["notBlank"], "created": [], "deleted": [], "network_id": [], "labels": [], "guaranteedBandwidth": ["notBlank"], "controllerUrl": [], "ports": [], "permitAllSlices": [], "router_id": [], "template": ["notBlank"], "owner": ["notBlank"], "backend_status": ["notBlank"], "id": [], "enacted": ["notBlank"]};
  this.networkDeployments = {"router_id": [], "subnet": [], "updated": [], "network": ["notBlank"], "created": [], "deleted": [], "net_id": [], "subnet_id": [], "deployment": ["notBlank"], "backend_status": ["notBlank"], "id": [], "enacted": ["notBlank"]};
  this.networkParameter = {"updated": [], "created": [], "deleted": [], "value": ["notBlank"], "object_id": ["notBlank"], "content_type": ["notBlank"], "backend_status": ["notBlank"], "parameter": ["notBlank"], "id": [], "enacted": ["notBlank"]};
  this.networkParameterType = {"updated": [], "name": ["notBlank"], "created": [], "deleted": [], "description": ["notBlank"], "backend_status": ["notBlank"], "id": [], "enacted": ["notBlank"]};
  this.networkSlice = {"updated": [], "slice": ["notBlank"], "network": ["notBlank"], "created": [], "deleted": [], "backend_status": ["notBlank"], "id": [], "enacted": ["notBlank"]};
  this.networkSliver = {"updated": [], "network": ["notBlank"], "created": [], "deleted": [], "ip": [], "sliver": ["notBlank"], "backend_status": ["notBlank"], "port_id": [], "id": [], "enacted": ["notBlank"]};
  this.networkTemplate = {"controller_kind": [], "updated": [], "name": ["notBlank"], "created": [], "deleted": [], "description": [], "shared_network_name": [], "guaranteed_bandwidth": ["notBlank"], "visibility": ["notBlank"], "topology_kind": ["notBlank"], "shared_network_id": [], "translation": ["notBlank"], "backend_status": ["notBlank"], "id": [], "enacted": ["notBlank"]};
  this.node = {"updated": [], "name": ["notBlank"], "created": [], "deleted": [], "site": ["notBlank"], "deployment": ["notBlank"], "backend_status": ["notBlank"], "id": [], "enacted": ["notBlank"]};
  this.payment = {"updated": [], "created": [], "deleted": [], "account": ["notBlank"], "amount": ["notBlank"], "date": ["notBlank"], "backend_status": ["notBlank"], "id": [], "enacted": ["notBlank"]};
  this.planetStack = {"updated": [], "description": ["notBlank"], "created": [], "deleted": [], "backend_status": ["notBlank"], "id": [], "enacted": ["notBlank"]};
  this.planetStackPrivilege = {"updated": [], "created": [], "deleted": [], "planetstack": ["notBlank"], "role": ["notBlank"], "user": ["notBlank"], "backend_status": ["notBlank"], "id": [], "enacted": ["notBlank"]};
  this.planetStackRole = {"updated": [], "created": [], "deleted": [], "role": ["notBlank"], "backend_status": ["notBlank"], "id": [], "enacted": ["notBlank"]};
  this.project = {"updated": [], "name": ["notBlank"], "created": [], "deleted": [], "backend_status": ["notBlank"], "id": [], "enacted": ["notBlank"]};
  this.reservation = {"updated": [], "slice": ["notBlank"], "created": [], "deleted": [], "startTime": ["notBlank"], "duration": ["notBlank"], "backend_status": ["notBlank"], "id": [], "enacted": ["notBlank"]};
  this.reservedResource = {"updated": [], "resource": ["notBlank"], "created": [], "deleted": [], "sliver": ["notBlank"], "reservationSet": ["notBlank"], "backend_status": ["notBlank"], "id": [], "quantity": ["notBlank"], "enacted": ["notBlank"]};
  this.role = {"updated": [], "description": ["notBlank"], "created": [], "deleted": [], "role": [], "content_type": ["notBlank"], "backend_status": ["notBlank"], "id": [], "role_type": ["notBlank"], "enacted": ["notBlank"]};
  this.router = {"updated": [], "name": ["notBlank"], "created": [], "deleted": [], "owner": ["notBlank"], "backend_status": ["notBlank"], "id": [], "enacted": ["notBlank"]};
  this.service = {"updated": [], "description": [], "created": [], "deleted": [], "enabled": [], "name": ["notBlank"], "versionNumber": ["notBlank"], "published": [], "backend_status": ["notBlank"], "id": [], "enacted": ["notBlank"]};
  this.serviceAttribute = {"updated": [], "name": ["notBlank"], "service": ["notBlank"], "created": [], "deleted": [], "value": ["notBlank"], "backend_status": ["notBlank"], "id": [], "enacted": ["notBlank"]};
  this.serviceClass = {"updated": [], "membershipFee": ["notBlank"], "name": ["notBlank"], "membershipFeeMonths": ["notBlank"], "created": [], "deleted": [], "description": ["notBlank"], "commitment": ["notBlank"], "backend_status": ["notBlank"], "id": [], "upgradeRequiresApproval": [], "enacted": ["notBlank"]};
  this.serviceResource = {"updated": [], "bucketInRate": ["notBlank"], "name": ["notBlank"], "bucketMaxSize": ["notBlank"], "created": [], "deleted": [], "serviceClass": ["notBlank"], "maxUnitsDeployment": ["notBlank"], "calendarReservable": [], "maxDuration": ["notBlank"], "maxUnitsNode": ["notBlank"], "cost": ["notBlank"], "backend_status": ["notBlank"], "id": [], "enacted": ["notBlank"]};
  this.site = {"abbreviated_name": ["notBlank"], "updated": [], "name": ["notBlank"], "created": [], "deleted": [], "enabled": [], "longitude": [], "site_url": [], "login_base": ["notBlank"], "location": ["notBlank"], "latitude": [], "is_public": [], "backend_status": ["notBlank"], "id": [], "enacted": ["notBlank"]};
  this.siteCredential = {"updated": [], "enc_value": ["notBlank"], "name": ["notBlank"], "created": [], "deleted": [], "site": ["notBlank"], "key_id": ["notBlank"], "backend_status": ["notBlank"], "id": [], "enacted": ["notBlank"]};
  this.siteDeployments = {"updated": [], "created": [], "deleted": [], "tenant_id": [], "site": ["notBlank"], "deployment": ["notBlank"], "backend_status": ["notBlank"], "id": [], "enacted": ["notBlank"]};
  this.sitePrivilege = {"updated": [], "created": [], "deleted": [], "site": ["notBlank"], "role": ["notBlank"], "user": ["notBlank"], "backend_status": ["notBlank"], "id": [], "enacted": ["notBlank"]};
  this.siteRole = {"updated": [], "created": [], "deleted": [], "role": ["notBlank"], "backend_status": ["notBlank"], "id": [], "enacted": ["notBlank"]};
  this.slice = {"updated": [], "imagePreference": [], "name": ["notBlank"], "service": [], "created": [], "deleted": [], "slice_url": [], "description": [], "serviceClass": ["notBlank"], "enabled": [], "site": ["notBlank"], "omf_friendly": [], "network": [], "max_slivers": ["notBlank"], "mountDataSets": [], "backend_status": ["notBlank"], "creator": [], "id": [], "enacted": ["notBlank"]};
  this.sliceCredential = {"updated": [], "slice": ["notBlank"], "enc_value": ["notBlank"], "name": ["notBlank"], "created": [], "deleted": [], "key_id": ["notBlank"], "backend_status": ["notBlank"], "id": [], "enacted": ["notBlank"]};
  this.sliceDeployments = {"router_id": [], "updated": [], "slice": ["notBlank"], "created": [], "deleted": [], "tenant_id": [], "subnet_id": [], "network_id": [], "deployment": ["notBlank"], "backend_status": ["notBlank"], "id": [], "enacted": ["notBlank"]};
  this.slicePrivilege = {"updated": [], "slice": ["notBlank"], "created": [], "deleted": [], "role": ["notBlank"], "user": ["notBlank"], "backend_status": ["notBlank"], "id": [], "enacted": ["notBlank"]};
  this.sliceRole = {"updated": [], "created": [], "deleted": [], "role": ["notBlank"], "backend_status": ["notBlank"], "id": [], "enacted": ["notBlank"]};
  this.sliceTag = {"updated": [], "slice": ["notBlank"], "name": ["notBlank"], "created": [], "deleted": [], "value": ["notBlank"], "backend_status": ["notBlank"], "id": [], "enacted": ["notBlank"]};
  this.sliver = {"node": ["notBlank"], "instance_name": [], "updated": [], "slice": ["notBlank"], "deploymentNetwork": ["notBlank"], "name": ["notBlank"], "created": [], "deleted": [], "ip": [], "image": ["notBlank"], "creator": [], "numberCores": ["notBlank"], "instance_id": [], "userData": [], "flavor": ["notBlank"], "backend_status": ["notBlank"], "id": [], "enacted": ["notBlank"]};
  this.tag = {"updated": [], "name": ["notBlank"], "service": ["notBlank"], "created": [], "deleted": [], "value": ["notBlank"], "object_id": ["notBlank"], "content_type": ["notBlank"], "backend_status": ["notBlank"], "id": [], "enacted": ["notBlank"]};
  this.usableObject = {"updated": [], "name": ["notBlank"], "created": [], "deleted": [], "backend_status": ["notBlank"], "id": [], "enacted": ["notBlank"]};
  this.user = {"username": ["notBlank"], "public_key": [], "updated": [], "backend_status": ["notBlank"], "is_readonly": [], "firstname": ["notBlank"], "user_url": [], "deleted": [], "lastname": ["notBlank"], "created": [], "is_active": [], "site": ["notBlank"], "email": ["notBlank"], "phone": [], "is_staff": [], "last_login": ["notBlank"], "timezone": ["notBlank"], "is_admin": [], "password": ["notBlank"], "id": [], "enacted": ["notBlank"]};
  this.userCredential = {"updated": [], "enc_value": ["notBlank"], "name": ["notBlank"], "created": [], "deleted": [], "user": ["notBlank"], "key_id": ["notBlank"], "backend_status": ["notBlank"], "id": [], "enacted": ["notBlank"]};
  this.userDashboardView = {"updated": [], "created": [], "deleted": [], "dashboardView": ["notBlank"], "order": ["notBlank"], "user": ["notBlank"], "backend_status": ["notBlank"], "id": [], "enacted": ["notBlank"]};
  this.userDeployments = {"updated": [], "created": [], "deleted": [], "kuser_id": [], "user": ["notBlank"], "deployment": ["notBlank"], "backend_status": ["notBlank"], "id": [], "enacted": ["notBlank"]};
};
xosvalidators = new xos_get_validators();
