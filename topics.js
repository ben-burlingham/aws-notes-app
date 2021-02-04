const TOPICS = [
  {
    "topic": 'Amplify',
    "bullets": 'PAAS. Managed deploying and hosting of static web apps. CI/CD on every commit.' 
  },
  {
    "topic": 'ApiGateway Cognito Authorizer',
    "bullets": 'COGNITO_USER_POOLS authorizer type. Calls to APIGW must include Authorization header with the access token from user pool signin.' 
  },
  {
    "topic": 'ApiGateway Lambda Authorizer types',
    "bullets": 'TOKEN authorizer: uses web token, e.g. JWT or OAuth. REQUEST authorizer: receives identity via req params, req headers, stage variables, context.' 
  },
  {
    "topic": 'ApiGateway caching',
    "bullets": 'Optional, per stage, with optional encryption, 237 GB max. Send Cache-Control header. Can restrict to only authorized clients.' 
  },
  {
    "topic": 'ApiGateway endpoint types',
    "bullets": 'HTTPS only. Edge-optimized (via CDN). Regional: custom domain. Private: via PrivateLink, VPC endpoint.' 
  },
  {
    "topic": 'ApiGateway integration types',
    "bullets": 'HTTP: Mapping Template to endpoint. AWS: Mapping Template to service. HTTP_PROXY: Unmodified to endpoint. AWS_PROXY: Unmodified to service. MOCK: No integration.' 
  },
  {
    "topic": 'ApiGateway stage variables',
    "bullets": 'Runtime-inserted values that can be used in parameter mapping, mapping templates and as placeholders in method integration ARNs and URLs.' 
  },
  {
    "topic": 'ApiGateway usage plan',
    "bullets": 'Optional. User must pass API key. Adds throttling limit and quota limit per stage.' 
  },
  {
    "topic": 'ApiGateway throttling',
    "bullets": 'Regional. Set in account, stage, or route. Account-level overrules others. Burst and rate limit in requests per second. Throws 429 Too many requests.' 
  },
  {
    "topic": 'Application Discovery Service',
    "bullets": 'On-premise VIRTUAL MACHINE infrastructure discovery. Agentless, or can run agent for deeper exploration. Integrates with Migration Hub and Athena.' 
  },
  {
    "topic": 'Application Load Balancer (ALB)',
    "bullets": 'OSI 7. No static IP - needs an ALIAS. Bridges SSL. Cross-zone. Optional WAF, sticky sessions, target group weighting. Targets IP, instance ID, or lambda.' 
  },
  {
    "topic": 'Appstream vs Workspaces',
    "bullets": 'Appstream is for individual applications, while Workspaces is for entire working environments on virtual desktops.' 
  },
  {
    "topic": 'AppSync',
    "bullets": 'Managed GraphQL. Resolvers can be in DynamoDB, Lambda, or ElasticSearch.' 
  },
  {
    "topic": 'Application Auto Scaling',
    "bullets": 'Scaling of non-EC2 services (Lambda, ECS, DynamoDB, Aurora replicas, etc.)' 
  },
  {
    "topic": 'Artifact',
    "bullets": 'Central resource for compliance-related information and online agreements.' 
  },
  {
    "topic": 'ASG health checks',
    "bullets": 'Uses EC2 health checks by default. Can add ELB health checks for more detail.' 
  },
  {
    "topic": 'ASG manual adjustments',
    "bullets": 'To adding existing EC2: Must be running, in same AZ, with existing AMI. To scale: Set DesiredCapacity.' 
  },
  {
    "topic": 'ASG lifecycle hooks',
    "bullets": 'Makes instances wait during launch or terminate. Resume w/ CompleteLifecycleAction or timeout 3600s. Supports custom actions to EventBridge or SNS.' 
  },
  {
    "topic": 'ASG resiliency',
    "bullets": 'Regional.' 
  },
  {
    "topic": 'ASG simple scaling policy',
    "bullets": 'Triggered by Cloudwatch Alarm breach. Must wait for scaling activity to complete before triggering again.' 
  },
  {
    "topic": 'ASG step scaling policy',
    "bullets": 'Step based on size of Cloudwatch Alarm breach. For each step, set lower bound, upper bound, and scaling adjustment. Can set warmup time in seconds.' 
  },
  {
    "topic": 'ASG schedule scaling policy',
    "bullets": 'Specified min, max and desired settings take effect at specified time and date.' 
  },
  {
    "topic": 'ASG target tracking scaling policy',
    "bullets": 'Choose a metric and a target value. ASG will create and manage a Cloudwatch Alarm and scale as appropriate. Can set warmup time in seconds.' 
  },
  {
    "topic": 'ASG termination policy',
    "bullets": 'AZ balance -> Allocation strategy -> oldest launch config -> oldest launch template -> closest billing hour. Scale-in protection blocks. Peaks at 110% if cannot terminate.' 
  },
  {
    "topic": 'Athena',
    "bullets": 'Schema-on-read. Stores SQL-like tables. Queries S3 data. Managed, HA, multi-AZ.' 
  },
  {
    "topic": 'Athena billing',
    "bullets": 'Data scanned per query (min 100MB). Columnar cheaper.' 
  },
  {
    "topic": 'Aurora cloning',
    "bullets": 'Copies a cluster quickly by only storing diffs.' 
  },
  {
    "topic": 'Aurora instance classes',
    "bullets": 'Burstable or memory optimized.' 
  },
  {
    "topic": 'Aurora resilience',
    "bullets": 'Regional: 6 copies across 3 AZs, and can add 0-15 Replicas. Optional cross-region read-only replication.' 
  },
  {
    "topic": 'Aurora endpoints',
    "bullets": 'Can use LB. Cluster/Writer: Alias for primary instance. Instance: An instance. Reader: Automatically load balanced reads. Custom: Customized single or group(s).' 
  },
  {
    "topic": 'Aurora Global Database',
    "bullets": 'Up to 5 secondary regions, max 16 RR each cluster. Replication at storage layer, one way, ~1s.' 
  },
  {
    "topic": 'Aurora multi-master',
    "bullets": 'Instances must be in same region. All RW, no endpoints - connect to instances directly. A quorum must accept change for it to be written, otherwise an error is returned.' 
  },
  {
    "topic": 'Aurora Serverless',
    "bullets": 'ACU = aurora capacity units (stateless), applied to cluster. Per second billing. Set min/max capacity.' 
  },
  {
    "topic": 'Aurora Serverless DataAPI',
    "bullets": 'Enable on cluster create or modify. Synchronous HTTPS SQL queries with integrations to AppSync, Lambda. Access via VPC endpoint. 1MB payload limit.' 
  },
  {
    "topic": 'Aurora Backtrack',
    "bullets": 'Point-in-time cluster rollback, 1s granularity, 72hr max.' 
  },
  {
    "topic": 'Auto Scaling Groups',
    "bullets": 'Regional. EC2 auto scaling with 300s default cooldown. Regulated by applying 1 or more policies.' 
  },
  {
    "topic": 'Batch',
    "bullets": 'Batch computing jobs on EC2 or ECS (not serverless). Can self-manage, or use VPC endpoints and managed environment.' 
  },
  {
    "topic": 'Budgets',
    "bullets": 'Much better than a billing alarm, Budgets can notify when costs/usage (or forecast costs/usage) exceed or drop below defined thresholds.'
  },
  {
    "topic": 'CDK',
    "bullets": 'Cloud Development Kit. Development framework to create (synthesize) and run (deploy) CFN templates.' 
  },
  {
    "topic": 'Certificate Manager (ACM)',
    "bullets": 'Generates or imports certs for use in (mostly) ALB and Cloudfront. Auto-renew if generated. Cannot deploy cross-region.' 
  },
  {
    "topic": 'cfn-hup',
    "bullets": 'Daemon that checks for EC2 userdata updates and executes custom hooks. It allows post-launch EC2 userdata changes (e.g. while updating Cloudformation template).' 
  },
  {
    "topic": 'Cloudformation cross-stack references',
    "bullets": 'Regional. Use Export output field.' 
  },
  {
    "topic": '`cloudformation deploy --template-file --s3-bucket`',
    "bullets": 'Creates and executes a change set. Optional `--no-execute-changeset`.' 
  },
  {
    "topic": '`cloudformation package --template-file --s3-bucket`',
    "bullets": 'Finds local artifact references in template. Zips and uploads to S3, then replaces values in template with S3 reference.' 
  },
  {
    "topic": 'Cloudformation UpdateReplacePolicy vs DeletionPolicy',
    "bullets": 'CFN Resource attributes. Can retain, delete, or snapshot. Occurs on stack update or delete.' 
  },
  {
    "topic": 'Cloudformation StackSets',
    "bullets": 'CRUD operations on multiple stacks. Cross-account, cross-region.' 
  },
  {
    "topic": 'Cloudformation macros',
    "bullets": 'Pre-processors (custom lambdas) for templates which transform portions of your template before CloudFormation starts provisioning resources.' 
  },
  {
    "topic": 'Cloudformation NestedStacks',
    "bullets": 'Best practice (a CFN stack has a limit of 500 resources). Acts as parent stack.' 
  },
  {
    "topic": 'Cloudformation ChangeSets',
    "bullets": 'View proposed stack updates before execution.' 
  },
  {
    "topic": 'Cloudfront summary',
    "bullets": 'CDN. Has VIEWER and ORIGIN. Caches paths and queries - but not uploads. Has geography-based price classes. Can add custom headers at origin.' 
  },
  {
    "topic": 'Cloudfront cache behaviors',
    "bullets": 'Path-based behaviors applied to requests: Origin, AllowedMethods, Compress, LambdaFunctionAssociations, TrustedKeyGroups, ViewerProtocolPolicy, etc.' 
  },
  {
    "topic": 'Cloudfront field-level encryption',
    "bullets": 'A cache behavior which KMS encrypts specific fields from edge to origin. This prevents vulnerabilities while the data passes through intermediate services.' 
  },
  {
    "topic": 'Cloudfront geo-restriction',
    "bullets": 'For the entire distribution allow/deny country codes. It only works with countries.' 
  },
  {
    "topic": 'Cloudfront invalidations',
    "bullets": 'At distribution level (not edge node). Has a price. Alternative: versioned file names: app change, but logging, versioning, consistency improved.' 
  },
  {
    "topic": 'Cloudfront OAI',
    "bullets": 'Origin Access Identity. Custom identity to allow Cloudfront access to an otherwise fully private S3 bucket.' 
  }, 
  {
    "topic": 'Cloudfront origins',
    "bullets": 'LB, S3, EC2, custom HTTP. Customize delivery with Lambda@Edge. 504 on timeout.' 
  },
  {
    "topic": 'Cloudfront reports',
    "bullets": 'Cache statistics (total, http status, byte transfers), popular objects (50), viewers (devices, browsers, os, locations), usage (req, data transfer), top referrers (25).' 
  }, 
  {
    "topic": 'Cloudfront SSL',
    "bullets": 'Supplies default cert for *.cloudfront.net. Must import for other domains.' 
  },
  {
    "topic": 'Cloudfront SSL imported certs',
    "bullets": 'Both viewer to CF and CF to origin need public certs that match DNS name. Cannot use self-signed cert. ALWAYS IMPORT from US-EAST-1 ACM.' 
  },
  {
    "topic": 'Cloudfront TTL',
    "bullets": 'Default 24h. Object level: send max-age / s-maxage / expires, or set in S3 metadata. Cache level: Set min/max. Overrides object setting.' 
  },
  {
    "topic": 'CloudHSM',
    "bullets": 'Hardware Security Module. FIPS 140-2 level 3. Customer-managed key store. Tamper-resistant device, API to access. Can handle SSL/TLS processing.' 
  },
  {
    "topic": 'CloudHSM resilience',
    "bullets": 'Single AZ, must create cluster for HA.' 
  },
  {
    "topic": 'CloudWatch',
    "bullets": 'A collection of products to collect, monitor, and performs action on metrics.' 
  },
  {
    "topic": '`cloudwatch put-metric-data --namespace`',
    "bullets": 'Publish metric data points with up to 10 dimensions.' 
  },
  {
    "topic": 'CloudWatch agent',
    "bullets": 'Run on-prem or in EC2. Can send any logs or metrics to Cloudwatch - particularly, disk space and memory utilization. Must specify config file when executing agent.' 
  },
  {
    "topic": 'CloudWatch Alarms',
    "bullets": 'Monitors single service metric. When breached, publishes to SNS.' 
  },
  {
    "topic": 'CloudWatch Alarms evaluation',
    "bullets": 'Period: seconds over which to evaluate. Evaluation period: # of most recent periods to evaluate. Datapoints to alarm: Count of breaching points before alarm is triggered.' 
  },
  {
    "topic": 'CloudWatch dashboards',
    "bullets": 'Can show cross-region, cross-account. Use built-in statistics and metric math.' 
  },
  {
    "topic": 'CloudWatch dimension',
    "bullets": 'KV tagging pair, up to 10 per metric. Used to filter results. Powerful when aggregated.' 
  },
  {
    "topic": 'Cloudwatch Events (now EventBridge)',
    "bullets": 'Uses account event bus to match schedule/pattern rules, transform or filter, then route to MANY TYPES OF SERVICE TARGET. Low throughput, no storage.' 
  },
  {
    "topic": 'CloudWatch namespace',
    "bullets": 'A container to group metrics. Often used to group applications. No default namespace - one must be specified on every publish.' 
  },
  {
    "topic": 'Cloudwatch Logs',
    "bullets": 'Tracks application logs, handling retention, encryption, permissions. Alarm metrics can be created from metric filters.' 
  },
  {
    "topic": 'Cloudwatch Logs exports',
    "bullets": 'Asynchronous, non-realtime export to S3, limit one active. Only SSE-S3 encryption (no SSE-KMS).' 
  },
  {
    "topic": 'CloudWatch Logs subscriptions',
    "bullets": 'Real-time feed of log events to Lambda, Kinesis, or Kinesis Data Firehose by applying subscription filters to a log group (max 2). Sent in compressed base-64.' 
  },
  {
    "topic": 'CloudWatch resolution',
    "bullets": 'Per metric. Standard: 60s. High: 1-5-10-30s. Aging data aggregates and loses resolution.' 
  },
  {
    "topic": 'CloudTrail',
    "bullets": 'Tracks API calls to AWS services, optionally global. Writes to SSE-S3 bucket. Meant for auditing account activity. Can dump to CW Logs.' 
  },
  {
    "topic": 'CMK',
    "bullets": 'Customer Master Key. Max 4kb. Can alias. Region isolated. Can be managed by customer or AWS (AES-256).' 
  },
  {
    "topic": 'CMK rotation',
    "bullets": 'AWS managed: Automatic, every 3 years. Customer managed: optional, every 1 year.' 
  },
  {
    "topic": 'CodeBuild',
    "bullets": 'Continuous Integradion. Declarative in buildspec.yml in project root.' 
  },
  {
    "topic": 'CodeDeploy',
    "bullets": 'Continuous deployment via HTTPS to AWS services or on-premise. Lifecycle in AppSpec.yml.' 
  },
  {
    "topic": 'CodeDeploy agent',
    "bullets": 'For EC2 or on-prem. Not for ECS or Lambda. Config in codedeployagent.yml on instance.' 
  },
  {
    "topic": 'CodePipeline workers',
    "bullets": 'Allow on-premise activities by polling a CodePipeline worker endpoint for jobs.' 
  },
  {
    "topic": 'CodeStar',
    "bullets": 'Collaborative develop-build-deploy, with project management dashboard that can integrate with Jira. Creates Cloudformation template with repo, roles, deployments, api, etc.' 
  },
  {
    "topic": 'Cognito',
    "bullets": 'Delivers temporary, role-based credentials.' 
  },
  {
    "topic": 'Cognito identity pool',
    "bullets": 'Handles authorization for users from a user pool, an external IDP, or custom authentication. Receives authentication token, returns temporary AWS credentials.' 
  },
  {
    "topic": 'Cognito Sync',
    "bullets": 'Synchronize user profile data across mobile devices and the web without requiring your own backend.' 
  },
  {
    "topic": 'Cognito user pool',
    "bullets": 'Regional. Handles user authentication and has lambda triggers. Can federate logins from third parties (Google, FB, etc). Returns JWT to pass to identity pool.' 
  },
  {
    "topic": 'Cognito user pool tokens',
    "bullets": 'ID token, access token, refresh token.' 
  },
  {
    "topic": 'Config',
    "bullets": 'Monitors, records, and compares configurations against managed or custom rules. Can automate and report to SNS, EventBridge, Lambda. Can aggregate cross-region, multi-acct.' 
  },
  {
    "topic": 'ControlTower',
    "bullets": 'Multi-account automated setup. "Guardrails" recommend SCP policies.' 
  },
  {
    "topic": 'Cost and Usage Report vs Cost Explorer vs Detailed Billing',
    "bullets": 'Cost and Usage Report: no forecast, only list. Cost explorer: 3 month forecast, 13 month historical. Detailed Billing: Deprecated.' 
  },
  {
    "topic": 'Cost allocation tags',
    "bullets": 'Enable automatic tagging of resources with their properties. Displayed on cost allocation report as additional columns.' 
  },
  {
    "topic": 'Credential Precedence',
    "bullets": 'CLI options (first). Env vars. CLI credentials file. CLI config file. Container credentials. IAM profile credentials (last).' 
  },
  {
    "topic": 'Data Pipeline',
    "bullets": 'Process and move data between compute and storage services (e.g. EMR, DynamoDB, S3). Scheduled or cron.' 
  },
  {
    "topic": 'Database Migration Service (DMS)',
    "bullets": 'One endpoint must be AWS. Often uses SCT. Uses ReplicationTasks inside ReplicationInstance.' 
  },
  {
    "topic": 'Data Lifecycle Manager',
    "bullets": 'Using DLM-Snapshot: true and DLM-managed: true tags, DLM policies automate EBS snapshot creation, tagging, retention, and deletion.' 
  },
  {
    "topic": 'DataSync',
    "bullets": 'Huge-scale data/metadata transfer, schedule, throttling, and validation to/from/between AWS services.' 
  },
  {
    "topic": 'DataSync locations',
    "bullets": 'On-premise Datasync Agent can transfer to VPC via PrivateLink or public endpoint. AWS locations include S3, EFS, FSX.' 
  },
  {
    "topic": 'DAX',
    "bullets": 'Regional. Private VPC only. Cluster: primary node, RRs, endpoints. Item &| query in-memory cache. Optional write-through. ' 
  },
  {
    "topic": 'DAX resilience',
    "bullets": 'Single AZ, must deploy to multiple AZs for HA.' 
  },
  {
    "topic": 'Dead Letter Queues',
    "bullets": 'SQS, Lambda. Uses redrive policy w/ maxReceiveCount. Can use to alarm, debug, timeout. FIFO messages must have MessageDeduplicationId.'
  },
  {
    "topic": 'Deployment: All-at-once',
    "bullets": 'In place. v1s replaced immediately with v2s.'
  },
  {
    "topic": 'Deployment: Blue/Green',
    "bullets": 'New network, new infra, then switch over.'
  },
  {
    "topic": 'Deployment: Canary',
    "bullets": 'Small subset, then all the rest.'
  },
  {
    "topic": 'Deployment: Immutable',
    "bullets": 'All new instances, same network.'
  },
  {
    "topic": 'Deployment: Rolling',
    "bullets": 'In place. v1s gradually replaced with v2.'
  },
  {
    "topic": 'Deployment: Rolling with Batch',
    "bullets": 'Rolling w/ batch: Test batch, then rolling.'
  },
  {
    "topic": 'Direct Connect (DX)',
    "bullets": 'Physical port---cable---VirtualInterface (VIF). Days to provision, expensive. Regional; install multiple for HA.' 
  },
  {
    "topic": 'Direct Connect Gateway',
    "bullets": 'Global. Connects a DirectConnect installation to multiple VPCs, even in different regions, on only private VIFs. Does not peer VPCs.' 
  },
  {
    "topic": 'Direct Connect LAGs',
    "bullets": 'Group up to 4 DXs for more speed. DXs must be same speed and terminate at the same location. NOT HA.' 
  },
  {
    "topic": 'Direct Connect VIFs',
    "bullets": 'Public for AWS service connections, private for VPC connections. Bypasses public internet.' 
  },
  {
    "topic": 'Directory Service resilience',
    "bullets": 'Regional: 2 or more domain controllers, which replicate between each other.' 
  },
  {
    "topic": 'Directory Service MicrosoftAD mode',
    "bullets": 'Objects created both on AWS and on-premise AD, therefore available through network failure. Keywords: Radius MFA, one-way/two-way/forest trusts, large user numbers.' 
  },
  {
    "topic": 'Directory Service SimpleAD mode',
    "bullets": 'Open source: Samba.' 
  },
  {
    "topic": 'Directory Service AD Connector mode',
    "bullets": 'Stores no objects in AWS, instead only redirects requests to existing on-premise directory server - must have working DX or VPN.' 
  },
  {
    "topic": 'DMS modes',
    "bullets": 'Full (one-off). CDC (change data capture). Full+CDC.' 
  },
  {
    "topic": 'DNS A record',
    "bullets": 'Maps a domain or subdomain to an IPv4 address.' 
  },
  {
    "topic": 'DNS AAAA record',
    "bullets": 'Maps a domain or subdomain to an IPv6 address.' 
  },
  {
    "topic": 'DNS ALIAS record',
    "bullets": 'Maps name to hostname - can use apex name. NEVER IP. Most AWS logical resources use ALIAS plus an A or CNAME.' 
  },
  {
    "topic": 'DNS CNAME record',
    "bullets": 'Maps NON-APEX name to hostname. NEVER IP.' 
  },
  {
    "topic": 'DNS MX record',
    "bullets": 'Mail server record, points to another name. NEVER IP.' 
  },
  {
    "topic": 'DynamoDB encryption',
    "bullets": 'Encrypted at rest, cannot be disabled. ' 
  },
  {
    "topic": 'DynamoDB resilience',
    "bullets": 'Regional: automatic multi-AZ replication. Optional cross-region multi-master replication.' 
  },
  {
    "topic": 'DynamoDB backups',
    "bullets": 'On-demand: persists until removed, can restore cross-region, change encryption type, LSIs optional. Point in time recovery: 1s granularity, retained 35d.' 
  },
  {
    "topic": 'DynamoDB capacity',
    "bullets": '"Capacity" = speed. Autoscaling adjusts w/o perf degredation. Can purchase reserved capacity. List with ReturnConsumedCapacity [TOTAL, INDEXES, NONE].' 
  },
  {
    "topic": 'DynamoDB RCU and WCU',
    "bullets": ' RCU: 4kb/s = 1 strong or 2 eventual. 2 for transaction. WCU: 1kb/s write. 2 for transaction. ProvisionedThroughputExceededException: too many requests.' 
  },
  {
    "topic": 'DynamoDB expressions',
    "bullets": '--condition-expression: Idempotent. --expression-attribute-values: placeholder in DynamoDB queries to handle reserved words, nested attributes, repetition, etc.' 
  },
  {
    "topic": 'DynamoDB items',
    "bullets": 'Have TTL. Item max 400kb. Fine-grain access via IAM policy.' 
  },
  {
    "topic": 'DynamoDB global tables',
    "bullets": 'Multi-master (all can RW) cross region replication ~1s (choose regions). Strongly consistent in writing region, eventually in others. Most recent writer wins.' 
  },
  {
    "topic": 'DynamoDB sparse index',
    "bullets": 'Omit empty rows where key attribute is empty (could leverage this for cheaper scan).' 
  },
  {
    "topic": 'DynamoDB LSI',
    "bullets": 'New SK (basically an alternative view), set at launch, max 5.' 
  },
  {
    "topic": 'DynamoDB GSI',
    "bullets": 'New PK, can new SK. Set anytime, max 20. GSI capacity must be >= table capacity. Only eventual consistency.' 
  },
  {
    "topic": 'DynamoDB index projection',
    "bullets": 'Attributes copied into an index. Partition and sort keys automatically projected. Specify ALL, KEYS_ONLY, INCLUDE [attr, ...].' 
  },
  {
    "topic": 'DynamoDB optimistic locking',
    "bullets": 'Adds an attribute with a version number. Can only update if your version has same number. ConditionalCheckFailedException. @DynamoDBVersionAttribute annotation in Java.' 
  },
  {
    "topic": 'DynamoDB projection',
    "bullets": 'Post-retrieve operation on GetItem, Query, or Scan. Narrows fields returned in response.' 
  },
  {
    "topic": 'DynamoDB query',
    "bullets": 'Cheaper than scan. Must use partition key. Optionally use sort key.' 
  },
  {
    "topic": 'DynamoDB scan',
    "bullets": 'Expensive. Reads all items, retrieve max 1MB. Can apply filter to retrieved results.' 
  },
  {
    "topic": 'DynamoDB scan optimizations',
    "bullets": 'Parallel faster than sequential. Rate limit to avoid consuming all capacity. `--limit` count of returned items.' 
  },
  {
    "topic": 'DynamoDB scan pagination',
    "bullets": 'Automatic by default. Can specify `--page-size` (items per page).' 
  },
  {
    "topic": 'DynamoDB streams',
    "bullets": 'Kinesis based, recommend use Kinesis Adapter + KCL. Enable per table. Stream events can trigger lambda. KEYS_ONLY, NEW_IMAGE, OLD_IMAGE, NEW_AND_OLD_IMAGE.' 
  },
  {
    "topic": 'EBS',
    "bullets": 'Block level storage. Attach to EC2 and create FS. Unmount before detach. Can multi-volume snapshot (RAID). Perf: InstanceStore > EBS > EFS.' 
  },
  {
    "topic": 'EBS resilience',
    "bullets": 'Single AZ, with auto replication.' 
  },
  {
    "topic": 'EBS encryption',
    "bullets": 'Optional KMS AES-256; IOPS unaffected.' 
  },
  {
    "topic": 'EBS optimized',
    "bullets": 'Dedicated capacity for EBS, better IOPS usage. Supported by default on EC2 instances unless too old.' 
  },
  {
    "topic": 'EBS snapshots',
    "bullets": 'Automatically encrypted. Can use volume while in progress. First full copy, then incremental. Stores in S3 so regionally resilient.' 
  },
  {
    "topic": 'EBS snapshot restore',
    "bullets": 'Usually lazy restore. Fast Snapshot Restore: Eager. Choose snap, AZ. Can restore cross-region.' 
  },
  {
    "topic": 'EBS volume types',
    "bullets": 'HDD for throughput/size. SSD for IOPS/low latency/perf. HDD no boot.' 
  },
  {
    "topic": 'EC2',
    "bullets": 'CW agent for memory utilization. Non-nitro instances max 32k IOPS.'
  },
  {
    "topic": 'EC2 burstable types',
    "bullets": 'T2, T3, T3a, and T4g.'
  },
  {
    "topic": 'EC2Rescue',
    "bullets": 'Diagnose and troubleshoot problems on an EC2 instance. It can collect logs and configuration files for further analysis.'
  },
  {
    "topic": 'EC2 cluster placement',
    "bullets": 'Close together, good perf. Only single AZ. Recommend same instance type, single launch request, enhanced networking.' 
  },
  {
    "topic": 'EC2 detailed monitoring',
    "bullets": 'Enables aggregate statistics and 1 minute report to Cloudwatch.' 
  },
  {
    "topic": 'EC2 enhanced networking',
    "bullets": 'SR-IOV (single route IO virtualization). Logical cards (ENA) inside instances, no need to switch to physical card for network traffic. Lower latency, higher PPS.' 
  },
  {
    "topic": 'EC2 instance store',
    "bullets": 'Labelled ephemeral[0-23]. Specify on launch. No fee. Data loss if stop, terminate, fail, hibernate. Best IOPS and throughput. Can RAID (0 for IOPS, 1 for mirror).' 
  },
  {
    "topic": 'EC2 InstanceLimitExceeded',
    "bullets": 'Met regional instance limit (soft 20, can request more from AWS customer service).'
  },
  {
    "topic": 'EC2 InsufficientInstanceCapacity',
    "bullets": 'Not enough on-demand capacity.'
  },
  {
    "topic": 'EC2 Immediate terminate (from pending)',
    "bullets": 'EBS volume limit, EBS corrupt, EBS encrypted, snapshot encrypted, AMI missing part.'
  },
  {
    "topic": 'EC2 partition placement',
    "bullets": 'Max 7 partitions/AZ, unlimited instances. good for huge scale systems. Used for HDFS, HBase, cassandra.' 
  },
  {
    "topic": 'EC2 pricing',
    "bullets": 'Reserved: (1y | 3y) or commit to savings plan (hourly). Spot: dynamic pricing, in fleets (specify quantity) or blocks (specify quantity and time).'
  },
  {
    "topic": 'EC2 session manager',
    "bullets": 'Can access private EC2 instance with VPC interface endpoint (by calling SSM).' 
  },
  {
    "topic": 'EC2 spread placement',
    "bullets": 'Separated, max 7 instances/AZ, each instance own rack/power. Used for resilience: mirrors, multi-node.' 
  },
  {
    "topic": 'EC2 termination protection',
    "bullets": 'Controls termination via console, API, or CLI. Not on Spot instances.'
  },
  {
    "topic": 'ECS task definitions',
    "bullets": 'Specify port mappings. EFS volume type can be shared.' 
  },
  {
    "topic": 'ECS task placement',
    "bullets": 'Determines which containers tasks are placed on, or which tasks to terminate.' 
  },
  {
    "topic": 'ECS task placement strategies',
    "bullets": 'Binpack: Minimize # of containers. Spread: Place based on specified container attribute. Random: Random.' 
  },
  {
    "topic": 'EFA',
    "bullets": 'Elastic Fabric Adapter. Option on EC2 ENI, 1 per instance. Inter-node comms at scale. HPC, Linux only. ENA + OS bypass. Must be on single subnet with open SG.' 
  },
  {
    "topic": 'EFS',
    "bullets": 'Concurrent access file system, mount on EC2. Linux only. IA or standard storage classes.' 
  },
  {
    "topic": 'EFS resilience',
    "bullets": 'Regional: automatic multi-AZ replication.' 
  },
  {
    "topic": 'EFS encryption',
    "bullets": 'Optional: at-rest on create, in-transit on mount.' 
  },
  {
    "topic": 'EFS lifecycle',
    "bullets": 'File RW resets timer. AFTER_7_DAYS or 14 30 60 90.' 
  },
  {
    "topic": 'EFS throughput modes',
    "bullets": 'Bursting (scales w/ size) or provisioned (independent of size).' 
  },
  {
    "topic": 'EIP',
    "bullets": 'Regional. No charge if only one on running instance - but charged if not attached.' 
  },
  {
    "topic": 'Elastic Beanstalk',
    "bullets": 'PAAS. --single for non-scalable. Fully customizable. Built in languages, or Docker. Databases must be external. Blue/green for runtime change.' 
  },
  {
    "topic": 'Elastic Beanstalk source .zip',
    "bullets": 'Add Dockerrun.aws.json or docker-compose.yml for Docker support. Add .ebextensions directory to configure environment and customize resources.' 
  },
  {
    "topic": 'Elasticache Memcached',
    "bullets": 'Multi-threaded, sharded. DNS failover if cluster spread across AZs, but no backups. Vertical scaling requires new cluster.' 
  },
  {
    "topic": 'Elasticache evictions',
    "bullets": 'Evictions happen when the cache memory usage limit (maxmemory for Redis) is reached and the cache engine has to remove items to make space for new writes.' 
  },
  {
    "topic": 'Elasticache node types',
    "bullets": 'General purpose / compute optimized / memory optimized.' 
  },
  {
    "topic": 'Elasticache Redis',
    "bullets": 'Optional RR TTL, AOF, auto-backups, transactions, async multi-AZ + auto promote. Supports re-sharding and shard rebalancing, both without downtime.' 
  },
  {
    "topic": 'ELB access logs',
    "bullets": 'Detailed request information, stored in a specified S3 bucket.' 
  },
  {
    "topic": 'ELB connection draining',
    "bullets": 'Set a 1s-1h timeout and deregister instances. No connections will be sent to the instances, and all connections will be forcibly closed when the timeout expires.'
  },
  {
    "topic": 'ELB networking',
    "bullets": 'Regional. Inserts HA node(s) into each AZ subnet, which must have 8 free IPs.' 
  },
  {
    "topic": 'ELB surge queue',
    "bullets": 'Requests pending routing to healthy instance. SpilloverCount is number of requests rejected because queue is full.' 
  },
  {
    "topic": 'EMR',
    "bullets": 'Managed Hadoop in one AZ (not HA) for big data processing. Long term or transient, with most EC2 pricing models available. Imports from S3, processes, and exports to S3.' 
  },
  {
    "topic": 'EMR nodes',
    "bullets": 'EC2 instances, most pricing models available. Master: Manages cluster, health, NAME access. Core: Runs HDFS, should not fail. Task: Can fail, good for spot instance.' 
  },
  {
    "topic": 'EMRFS',
    "bullets": 'S3-backed (resilient) filesystem. Resilient to core node failure.' 
  },
  {
    "topic": 'ENI',
    "bullets": 'An additional network interface on EC2 instance. Can only attach to SUBNETS IN AZ. Also on FSx, Lambda.' 
  },
  {
    "topic": 'Envelope encryption',
    "bullets": 'Plaintext master key encrypts data key encrypts target. Example: EBS + KMS and CMK / DEK interaction (must have Decrypt permissions on KMS).' 
  },
  {
    "topic": 'Ephemeral port',
    "bullets": 'Client-selected port. SSH, for example: client port 32452 --> server port 22. 1024-65535 covers all possibilities.' 
  },
  {
    "topic": 'ES (Elastic Search)',
    "bullets": 'Not serverless, often a part of ELK stack (ElasticSearch, Kibana, LogStash) which all have parallel services in native AWS.' 
  },
  {
    "topic": 'External Identity Providers',
    "bullets": 'FB, Amazon, Google, Apple, OpenID, SAML-based IDP (e.g. MS AD Federation Services)'
  },
  {
    "topic": 'File Gateway summary',
    "bullets": 'NFS or SMB file storage on S3, with local caching. Primary data held in S3; those objects are visible as on-premise files.' 
  },
  {
    "topic": 'Flow log pattern',
    "bullets": 'version acct-id interface-id srcaddr dstaddr srcport dstport protocol packets bytes start end action log-status.  Common protocols: 1 ICMP 6 TCP 17 UDP' 
  },
  {
    "topic": 'FSx',
    "bullets": 'File server. Distributed file system. Has ENI. Access via VPC / DX / VPN. Automatic encryption in-transit and at-rest.' 
  },
  {
    "topic": 'FSx Windows',
    "bullets": 'Access via SMB (server message block). Can integrate with on-prem AD. Optional dedup. VolumeShadowCopyService (VSS) for consistency.' 
  },
  {
    "topic": 'FSx Lustre',
    "bullets": 'High perf PARALLEL FS. Not HA. Could use as hot storage (S3 for cold). POSIX permissions. NFS. Concurrent file access. Can sync with S3. Very perf.' 
  },
  {
    "topic": 'FSx resilience',
    "bullets": 'Single AZ + auto replication, 1 or 2 IPs. Multi AZ for HA, 4 IPs.' 
  },
  {
    "topic": 'GlobalAccelerator',
    "bullets": 'Network product. 2 static anycast IPs. Public internet to edge node to backbone. Endpoint groups with automatic health checks.' 
  },
  {
    "topic": 'Glue',
    "bullets": 'Serverless managed ETL service. Can be used with Athena to crawl S3 data and create tables. Optional SSE at rest. SSL in transit. Regional.' 
  },
  {
    "topic": 'GuardDuty',
    "bullets": 'Continuous AI/ML monitoring of DNS, FlowLogs, CW logs, trails for unexpected or unauthorised activities. Can be multi-acct. Publishes events or notifications.' 
  },
  {
    "topic": 'Personal Health Dashboard',
    "bullets": 'Provides a personalized view into performance and availability of underlying AWS services, with event visibility for remediation.' 
  },
  {
    "topic": 'IAM Access Keys',
    "bullets": 'Can assign 2 per user. Used only on CLI.' 
  },
  {
    "topic": 'IAM groups',
    "bullets": 'Not an identity. Cannot log in. Cannot nest. Can have policies.' 
  },
  {
    "topic": 'IAM roles',
    "bullets": 'Good for cross-account access. Can only be assumed by applications or services or users. User must have PassRole permission if passing to application.' 
  },
  {
    "topic": 'IAM policies',
    "bullets": 'Identity based or resource based. Resource-based "trust" a principal. Null condition is existince check.' 
  },
  {
    "topic": 'Interface endpoint names',
    "bullets": 'Private IP of ENI is exposed in endpoint-specific DNS name, a Zonal DNS name, a Regional DNS name, or PrivateDNS.' 
  },
  {
    "topic": 'Interface endpoint PrivateDNS',
    "bullets": 'Creates a private R53 hosted zone, which replaces the default DNS for a service, causing all in-VPC calls to that service to use the endpoint automaticaly.' 
  },
  {
    "topic": 'Interface endpoint resilience',
    "bullets": 'Are ENI in a Single AZ subnet. Use multiple, spread across AZs, for DR.' 
  },
  {
    "topic": 'Inspector',
    "bullets": 'EC2 OS and application security, run 15m - 1d, then report. Uses rules packages: CVE, CIS, AWS Security Best Practices. Install agent to watch network.' 
  },
  {
    "topic": 'IOT and Greengrass',
    "bullets": 'IOT gateway with shadow devices for resilience over unreliable connections. Greengrass allows some AWS services to run locally on an IoT device.' 
  },
  {
    "topic": 'Macie',
    "bullets": 'Automatically discovers, classifies, and protects sensitive S3 data' 
  },
  {
    "topic": 'KCL',
    "bullets": 'Kinesis Client Library. Only in Java. Paralellism via shards, max 1 worker per shard. Can re-shard.' 
  },
  {
    "topic": 'Kinesis Analytics',
    "bullets": 'Real time serverless analytics analysis w/ SQL. Input from Streams or Firehose. Can then send to Lambda, Firehose, or Kinesis Data Streams.' 
  },
  {
    "topic": 'Kinesis Firehose',
    "bullets": 'Load data from basically ANY PRODUCER. Near-realtime; buffers 1MB or 60s but NO STORAGE. Can stream to HTTP, Redshift, S3, Splunk, ElasticSearch (NOT LAMBDA).' 
  },
  {
    "topic": 'Kinesis Firehose blueprints',
    "bullets": 'Lambda transform for firehose data.' 
  },
  {
    "topic": 'Kinesis Streams',
    "bullets": 'Scalable streaming service - can handle near-infinite data rates. Uses shards. Designed for ingestion of data. Retains data for 24h.' 
  },
  {
    "topic": 'Kinesis Video Streams',
    "bullets": 'Live video stream consumption with API access only, no access to its storage.' 
  },
  {
    "topic": 'KMS',
    "bullets": 'Create, manage, use crypto keys. Service will throttle ~5.5k requests.' 
  },
  {
    "topic": 'KMS CMK',
    "bullets": 'Regional, symmetric, < 4kb. Has key policy. If KMS created ("customer managed"), can auto-rotate 1y. If AWS managed, auto-rotates every 3y.' 
  },
  {
    "topic": 'Lambda',
    "bullets": 'Runs in isolated environment with own ENI (or, hyperplane since 2019). Set memory allocation, execution role. Autoscales then throttles.' 
  },
  {
    "topic": 'Lambda environment variables',
    "bullets": '4kb max. Encrypted at rest; visible in console.' 
  },
  {
    "topic": 'Lambda invocation',
    "bullets": 'RequestResponse (sync), Event (async), or DryRun.' 
  },
  {
    "topic": 'Lambda versions',
    "bullets": 'Aliased. Traffic shifting via weights enables linear or canary deploys between versions.' 
  },
  {
    "topic": 'Lambda concurrency',
    "bullets": 'Soft limit of 1000, can request more. Provisioned: N warm execution environments. Reserved: N slots for this lambda. Service will maintains 100 unreserved slots.' 
  },
  {
    "topic": 'Lambda packages',
    "bullets": 'Zip archives or container images. Can be a layer. Can put large binaries into S3 instead.' 
  },
  {
    "topic": 'Lambda runtime',
    "bullets": '512mb /tmp. 3GB memory. 5 layers. 15 min max runtime. 6MB request payload. 50MB/250MB compressed/uncompressed max.' 
  },
  {
    "topic": 'Lambda@Edge',
    "bullets": 'Runs in AWS public edge locations, not VPC. Customizes CF delivery. Faster timeouts than lambdas (30s server, 5s client). Set at behavior level.' 
  },
  {
    "topic": 'Launch Configs vs Launch Templates',
    "bullets": 'Provision EC2s. LT newer, can from UI or ASG. LC only in ASG. LC immutable, LT can modify.' 
  },
  {
    "topic": 'Lightsail',
    "bullets": 'PAAS. Managed LB, DB, EC2, Docker.' 
  },
  {
    "topic": 'Limit Monitor',
    "bullets": 'Automatically provisions the services necessary to track resource usage and send notifications via slack or email as you approach limits.' 
  },
  {
    "topic": 'MFA delete',
    "bullets": 'Optional bucket feature. Puts MFA on versioning and deletion. Pass in MFA code with requests.' 
  },
  {
    "topic": 'MQ summary',
    "bullets": 'Open-source compliant message broker. Runs as a private service, so needs networking set up.' 
  },
  {
    "topic": 'Multipart uploads',
    "bullets": 'Optional bucket feature. Fail/restarts parts. Parts can be 5mb to 5gb. If encrypted, uploader must have decrypt permissions so file can be chunked properly.' 
  },
  {
    "topic": 'Multivalue headers',
    "bullets": 'Combines same-named parameter values and cookie values into array . Supported on ALB, APIGateway.' 
  },
  {
    "topic": 'NACL',
    "bullets": 'IP-based, no URL filter. Lowest rule number wins. Associate to subnet.' 
  },
  {
    "topic": 'Network Load Balancer',
    "bullets": 'OSI 4/5, frame data only. Can attach 1 EIP / AZ. Optional access logs, cross-zone. Unbroken security (passthrough). Proxy Protocol adds headers with client IPs.' 
  },
  {
    "topic": 'NAT instance',
    "bullets": 'Legacy. EC2 hard-coded NAT gateway, some AMIs available. Deprecated in favor of NAT gateways.' 
  },
  {
    "topic": 'OpsWorks',
    "bullets": 'Managed Chef, Puppet environments. Easier than CFN but less comprehensive.' 
  },
  {
    "topic": 'Organizations',
    "bullets": 'Manage multiple accounts by grouping with OUs and using Consolidated Billing.' 
  },
  {
    "topic": 'Organizations trusted access',
    "bullets": 'Creates an immutable service-linked role for cross-account service linking.' 
  },
  {
    "topic": 'ParallelCluster',
    "bullets": 'Cluster management only. HPC for ML with EFA.' 
  },
  {
    "topic": 'Presigned URL',
    "bullets": 'S3. Expiration. Anyone can access.' 
  },
  {
    "topic": 'PrivateLink',
    "bullets": 'VPC endpoint services. Powers private AWS service endpoints in VPC. HA. Used for DataSync.' 
  },
  {
    "topic": 'Quantum Ledger Database (QLDB)',
    "bullets": 'Serverless blockchain database that can near-realtime stream to Kinesis or export to S3.' 
  },
  {
    "topic": 'Resilience: ENI, IGW, NATGW',
    "bullets": 'Single AZ, Regional, Single AZ' 
  },
  {
    "topic": 'R53 DNSSEC',
    "bullets": 'DNS record signing, enabled on a domain to protect against spoofing or MITM attacks. Provide your public key to domain registrar to set up.' 
  },
  {
    "topic": 'R53 health checks',
    "bullets": 'Globally distributed, 18% to pass. "Evaluate Target Health" flag. Monitor endpoint, other health checks (calculated, with threshhold), or CW alarm metric stream.' 
  },
  {
    "topic": 'R53 hosted zones',
    "bullets": 'DNS DB for domain. Authoritative. Globally resilient. Can be private.' 
  },
  {
    "topic": 'R53 simple routing policy',
    "bullets": 'Round robin. No health check. Can cycle through multiple IPs.' 
  },
  {
    "topic": 'R53 multivalue routing policy',
    "bullets": 'Simple but with health checks. Max of 8 returned (random).' 
  },
  {
    "topic": 'R53 failover routing policy',
    "bullets": 'Simplest HA. Active-Passive failover via health check. Primary & secondary records selected. Uses ALIAS.' 
  },
  {
    "topic": 'R53 weighted routing policy',
    "bullets": 'Record weights (percentages), with health check. Active-active will treat all similarly.' 
  },
  {
    "topic": 'R53 geoproximity routing policy',
    "bullets": 'Distance-based with +- biases to increase regional coverage. Tag records w/ lat/long or region.' 
  },
  {
    "topic": 'R53 geolocation routing policy',
    "bullets": 'Tag records with US state/country/continent/default. AWS selects most relevant (NOT CLOSEST) or "NO ANSWER".' 
  },
  {
    "topic": 'R53 latency routing policy',
    "bullets": 'You map record to region, AWS selects fastest. Not real time.' 
  },
  {
    "topic": 'R53 multi-value routing policy',
    "bullets": 'Healthy records presented to client for selection.' 
  },
  {
    "topic": 'Resource access manager (RAM)',
    "bullets": 'Allows an owner to read-only share network resources of a VPC (the VPC is not shared). Subnet names not consistent across accounts, so use their IDs.' 
  },
  {
    "topic": 'RDS VPC setup',
    "bullets": 'Put in subnet, add SG, access with CNAME.' 
  },
  {
    "topic": 'RDS IAM access',
    "bullets": 'Via STS authentication token. Disabled by default, and available in MySQL and PostgreSQL only. IAM policy must allow rds-db:connect.' 
  },
  {
    "topic": 'RDS transaction logs',
    "bullets": 'Uploaded to S3 every 5 min.' 
  },
  {
    "topic": 'RDS resilience',
    "bullets": 'Single AZ, optional multi-AZ, optional cross-region read replicas.' 
  },
  {
    "topic": 'RDS maintenance',
    "bullets": 'Has maintenance window for OS patches, indicated in console.' 
  },
  {
    "topic": 'RDS encryption',
    "bullets": 'On create. Cannot disable or un-encrypt (but can export to unencrypted). Can TDE on Oracle and MS SQL Server (at rest).' 
  },
  {
    "topic": 'RDS enhanced monitoring',
    "bullets": 'CW _instance OS_ monitoring (RDS CW only watches hypervisor). Stored in CW Logs. multi-AZ support.' 
  },
  {
    "topic": 'RDS log types',
    "bullets": 'Error. Audit. General. Slow query. (All publish to Cloudwatch.)' 
  },
  {
    "topic": 'RDS multi-AZ',
    "bullets": 'Topology: 2 instances, same region. Synchronous w/ "standby replica". HA not FT. Automatic failover by switching CNAME. ' 
  },
  {
    "topic": 'RDS parameter groups and option groups',
    "bullets": 'Instance (vendor) specific options. Can be dynamic or static.' 
  },
  {
    "topic": 'RDS Read Replicas',
    "bullets": 'Async RO replication, max 5, same encryption as source. Must enable backups (retention > 0). Can promote. Can be cross-region (new CMK if encrypted).' 
  },
  {
    "topic": 'RDS security',
    "bullets": 'Optional mandatory in-transit (force_ssl). At rest via KMS, handled by host or EBS. Cannot remove encryption. MSSQL, Oracle: TDE w/ CloudHSM.' 
  },
  {
    "topic": 'RDS snapshots',
    "bullets": 'First full copy, then incremental. Manual or automated (0-35 day retention). Slow to restore. Outage unless multi-AZ.' 
  },
  {
    "topic": 'Redshift',
    "bullets": 'PB-scale OLAP data warehouse with a SQL-like interface. A Redshift Cluster is a private network in one AZ, with leader and compute nodes (not serverless).'
  },
  {
    "topic": 'Redshift automated snapshots',
    "bullets": 'Enabled by default, retained for 1 day by default (can set up to 35). Cannot be deleted by user. Can create a schedule and attach to one or more clusters.'
  }, 
  {
    "topic": 'Redshift cross-region snapshots',
    "bullets": 'Optional; select 1 region and retention period. Allow encryption operations with "snapshot copy grant". Take note: this is snapshotting, not replication.'
  }, 
  {
    "topic": 'Redshift Audit Logs',
    "bullets": 'Optional. Connection log: authentication attempts, (dis)connections. User log: changes to DB users. User activity log: queries, pre-execution.'
  }, 
  {
    "topic": 'Redshift Enhanced VPC routing',
    "bullets": 'Forces COPY and UNLOAD traffic through your VPC. Allows use of VPC features: flow logs, IGW, SG, DNS, endpoints, etc.'
  }, 
  {
    "topic": 'Redshift Spectrum',
    "bullets": 'Uses a Redshift cluster for serverless S3 querying.'
  }, 
  {
    "topic": 'Redshift Workload Management',
    "bullets": 'Queues queries according to service classes, which have configuration parameters.'
  },
  {
    "topic": 'Reserved instance price sharing',
    "bullets": 'If chosen RIs are same type, same OU and same AZ, they can share discounts. Toggle RI and savings plan discount sharing in billing preferences.'
  },
  {
    "topic": 'Resource groups',
    "bullets": 'Regional service for finding, creating, and tagging groups of resources. Supports many types of resources.' 
  },
  {
    "topic": 'S3 resilience',
    "bullets": 'Regional: Redundancy across at least 3 AZ/region (except One-Zone IA).'
  },
  {
    "topic": 'S3 byte-range fetch',
    "bullets": 'Higher throughput w/ concurrent requests.'
  },
  {
    "topic": 'S3 durability',
    "bullets": '11 9s, strongly consistent (except bucket config changes)'
  }, 
  {
    "topic": 'S3 Glacier retrieval',
    "bullets": 'Async. Can request byte range (MB). Request, then download on complete. Expedited: 1-5 minutes. Purchase provisioned capacity for HA. Standard: 3-5 hr. Bulk: 5-12 hr.'
  },  
  {
    "topic": 'S3 server access logs',
    "bullets": 'Detailed request logging per bucket. To get bucket-level operations (object logging / API logs), use CloudTrail instead.'
  },
  {
    "topic": 'S3 Inventory',
    "bullets": 'CSV list of bucket objects and their metadata. Good for auditing encryption and replication status.'
  },
  {
    "topic": 'S3 lifecycle',
    "bullets": 'Can transition to Standard-IA AFTER 30 DAYS.'
  },
  {
    "topic": 'S3 objects',
    "bullets": 'HTTP 503 (Service Unavailable) if too many objects. Bucket policy can affect objects (/*) or bucket (/).'
  },
  {
    "topic": 'S3 replication',
    "bullets": 'Cross-region or same-region. Versioning reqd.'
  },
  {
    "topic": 'S3 Select',
    "bullets": 'Ad-hoc query on single object (not multiple objects, like Athena).'
  }, 
  {
    "topic": 'S3 Transfer acceleration', 
    "bullets": 'S3 feature for sending upload/download traffic via AWS backbone. Domains cannot include a dot. Recommended for centralized buckets.'
  },
  {
    "topic": 'S3 vault lock vs object lock',
    "bullets": 'Vault: Glacier policy that defines actions on archives, immutable after testing. Object: Like vault but...better? for everything?'
  },
  {
    "topic": 'SCT',
    "bullets": 'Schema Conversion Tool. NOT FOR MIGRATING but often used with DMS, or when changing DB engines. OLTP or OLAP.' 
  },
  {
    "topic": 'Secrets Manager',
    "bullets": 'Can generate. Uses KMS to encrypt. Can rotate for RDS and Redshift, otherwise needs custom lambda.' 
  },
  {
    "topic": 'Server Migration Service (SMS)',
    "bullets": 'Agentless, incremental, full VIRTUAL MACHINE migration. Uses a pre-configured to export to S3, then create AMIs for EC2 creation. Integrates with Migration Hub.' 
  },
  {
    "topic": 'Service Catalog',
    "bullets": 'SELF-SERVICE portal of AWS services. Admins use CFN to create portfolio stacks so END-USERS can deploy infra w/o IT intervention.' 
  },
  {
    "topic": 'Service Catalog AutoTags',
    "bullets": 'Automated tagging of provisioned products. Does not count against 50-customer-created-tag limit.' 
  },
  {
    "topic": 'Service Catalog TagOptions',
    "bullets": 'Templated user-selectable options for allowed keys to enforce consistency when launching a provisioned product.' 
  },
  {
    "topic": 'Service Control Policies (SCP)',
    "bullets": 'Attached to Organizations, OUs, or accounts. Deny/allow lists which affect all accounts (not services!) except org management acct.' 
  },
  {
    "topic": 'Simple Email Service (SES)',
    "bullets": 'Send or receive LARGE VOLUME - for one-offs, use SNS instead. Stores to S3.' 
  },
  {
    "topic": 'Signed URL / signed cookie',
    "bullets": 'Cloudfront. Root user generates Cloudfront keypair and becomes TRUSTED SIGNER. Canned policy (only expire) or custom (longer, start and end, ip range, reusable).' 
  },
  {
    "topic": 'VPN (Site-to-Site)',
    "bullets": 'IPSec connection over public internet between on-premise and VPC network.' 
  },
  {
    "topic": 'VPN gateways',
    "bullets": 'No IPv6. Virtual Gateway: AWS side. Customer Gateway: Customer side, needs static IP.' 
  },
  {
    "topic": 'SNI',
    "bullets": 'Extension to TLS allowing host to be included. For multiple SSL certs from same IP. On ALB and Cloudfront.' 
  },
  {
    "topic": 'Snowball',
    "bullets": '50TB or 80TB. No compute.' 
  },
  {
    "topic": 'Snowball Edge',
    "bullets": 'Snowball, with compute. Storage optimized: has EC2 and 1TB SSD. Compute optimized: Crazy. Compute with GPU: compute + GPU.' 
  },
  {
    "topic": 'SNS summary',
    "bullets": 'Allows REGIONAL publishing of <=256kb messages to topics for subscribers with optional SSE. Topic policy allows cross-account access.' 
  },
  {
    "topic": 'SNS throughput',
    "bullets": 'Can handle millions of RPS - nearly unlimited throughput. Also supports delivery retries and delivery status.' 
  },
  {
    "topic": 'SNS filter policies',
    "bullets": 'In subscription, match MessageAttributes (cannot filter on message content). Allows multiple subscribers to a single topic (creates fanout in SQS).' 
  },
  {
    "topic": 'SNS recipients',
    "bullets": '256KB PAYLOAD. SQS. Lambda. HTTP(S). SMS. Mobile push. Email.' 
  },
  {
    "topic": 'SQS large messages',
    "bullets": 'The maximum size is 2GB. The Extended Library, which is only available in the Java SDK, can toggle S3-based storage and retrieval.' 
  },
  {
    "topic": 'SQS delay queues vs message timer',
    "bullets": 'Both delay initial visibility 0s-15m. Delay queue for entire queue, message timer for single message.' 
  },
  {
    "topic": 'SQS polling',
    "bullets": 'Long: Query every server, set 0-20s. Cost effective b/c empty responses ignored. Short: Query server subset every 1s, always respond. If >1k will not return all.' 
  },
  {
    "topic": 'SQS visibility timeout',
    "bullets": '30s. Starts after message delivered to consumer. Message will be re-queued if not deleted before timeout ends. Retained for 4 days then deleted automatically.' 
  },
  {
    "topic": 'SSE-C',
    "bullets": 'Customer passes object and encryption key on request to S3. S3 encrypts object then discards key.'
  },
  {
    "topic": 'SSE-C headers',
    "bullets": 'x-amz-server-side​-encryption​-customer-algorithm, x-amz-server-side-encryption-customer-key, x-amz-server-side-encryption-customer-key-MD5' 
  },
  {
    "topic": 'SSE-S3',
    "bullets": 'Add x-amz-server-side-encryption header. AES-256. On PUT, COPY, and multipart. Key itself encrypted with auto-rotating master key.' 
  },
  {
    "topic": 'SSO',
    "bullets": 'The preferred workplace identity solution (better than SAML 2.0). Integrated with Microsoft AD through Directory Service. "Permission sets" define account access policies.' 
  },
  {
    "topic": 'Step function state language',
    "bullets": 'Define Tasks, can Catch or Retry inside them, or route through Parallel branches. ' 
  },
  {
    "topic": 'Sticky sessions',
    "bullets": 'ALB only. Sets AWSALB encrypted cookie on client. Next request receives cookie, decrypts, returns to same target. Can cause uneven traffic.' 
  },
  {
    "topic": 'Storage Gateway',
    "bullets": 'Connects on premise storage to S3. Modes: volume (iSCSI), file, tape.' 
  },
  {
    "topic": 'Storage Gateway Volume types',
    "bullets": 'Stored (local primary, async backup to s3) or cached (local cache, primary storage in S3). Can EBS snapshot either one.' 
  },
  {
    "topic": 'STS',
    "bullets": 'Generates temporary credentials. Can generate auth failure messages; decode with DecodeAuthorizationMessage.' 
  },
  {
    "topic": '`sts assume-role --role-arn --role-session-name`',
    "bullets": 'Call with credentials to get updated credentials.' 
  },
  {
    "topic": '`sts get-session-token`',
    "bullets": 'Retrieve security credentials for AWS account or IAM user.' 
  },
  {
    "topic": '`sts assume-role-with-saml --role-arn --principal-arn --saml-assertion`',
    "bullets": 'Retrieve security credentials via SAML assertion (think enterprise directories).' 
  },
  {
    "topic": '`sts assume-role-with-web-identity --role-arn --role-session-name --web-identity-token`',
    "bullets": 'Retrieve security credentials via JWT/OAuth or other web ID token.' 
  },
  {
    "topic": 'SWF',
    "bullets": 'Task workflow coordination, avoids duplicate execution, can have child flows, uses "Flow Framework" - particularly for Mechanical Turk. Not serverless.' 
  },
  {
    "topic": 'SWF signal and marker',
    "bullets": 'Inject information via SIGNAL while running. Record and consume custom info with MARKERs.' 
  },
  {
    "topic": 'Systems Manager (SSM)',
    "bullets": 'Agent-based automated or manual operations on multiple instances. Has maintenance windows, param store, Run command, inventory, state and patch manager.' 
  },
  {
    "topic": 'Systems Manager Patch Manager',
    "bullets": 'AWS-RunPatchBaseline runs during maintenance window to apply patch baseline, after which inventory is updated.' 
  },
  {
    "topic": 'Systems Manager parameter store',
    "bullets": 'String, StringList, or SecureString' 
  },
  {
    "topic": 'Transit Gateway',
    "bullets": 'Transitive REGIONAL routing for multiple VPCs. For VPN, apply downstream after a Direct Connect gateway. Multi-account if used with RAM.' 
  },
  {
    "topic": 'Trusted Advisor',
    "bullets": 'Makes real-time recommendations on billing, performance, and security. Status of checks can be reported to Cloudwatch Events if account upgraded.' 
  },
  {
    "topic": 'VPC peering',
    "bullets": 'Creates a gateway for communication between exactly 2 VPCs with non-overlapping CIDR blocks, optionally inter-region.' 
  },
  {
    "topic": 'VPN CloudHub',
    "bullets": 'AWS-managed hub-and-spoke model for communication between VPNs.' 
  },
  {
    "topic": 'Virtual Private Gateway vs Direct Connect gateway',
    "bullets": 'Evolved from VIFs to share DX. V(P)GW: Same-region VPC sharing. DGW: Cross-region VPC sharing.' 
  },
  {
    "topic": 'WAF',
    "bullets": 'Web ACLs on CF, ApiGateway, ALB. Can match on IP, geographic location, query strings, headers.' 
  },
  {
    "topic": 'Workdocs',
    "bullets": 'Docs service featuring user management, versioning, end encryption. Can be used like Developers can create custom applications with anonymous credentials.' 
  },
  {
    "topic": 'Workdocs Content Manager',
    "bullets": 'Developers can create user applications with anonymous credentials and auth token, or user applications with IAM credentials.' 
  },
  {
    "topic": 'X-Ray',
    "bullets": 'Distributed tracing. Needs IAM. Sets and tracks HTTP Tracing Header. Creates a detailed Service Graph (JSON).' 
  },
  {
    "topic": 'X-Ray Annotations vs Metadata',
    "bullets": 'Can add in either segment or subsegment. Annotations: search-indexed KV pairs. Good for console grouping. Appears in GetTraceSummaries. Metadata: non-indexed KV pairs.' 
  },
  {
    "topic": 'X-Ray daemon',
    "bullets": 'Listens on UDP 2000. Uploads segment documents. Uses AWSXRayDaemonWriteAccess managed policy.' 
  },
  {
    "topic": 'X-Ray daemon activation',
    "bullets": 'Lambda: Automatic. Beanstalk: Enable in config. Local/onprem/EC2 and other AWS: download and run w/ permissions.' 
  },
  {
    "topic": 'X-Ray segment vs subsegment',
    "bullets": 'Segment: All data points for a single component. Composed of subsegments. Subsegment: Has segment parent_id. Contain granular custom data.' 
  },
]